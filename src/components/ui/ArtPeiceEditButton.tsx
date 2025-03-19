import React from 'react'
import { useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Grid from '@mui/material/Grid2';
import CustomDialog from '../ui/ModalWithChildren';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { Alert, Chip, IconButton, MenuItem, Select, SelectChangeEvent, TextField, Tooltip } from '@mui/material';
import FileUpload from '../ui/customFileUpload';
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input';
import { toast } from 'react-toastify';
import { ArtPieceType, userType } from '../../types';

interface props {
    FieldData: ArtPieceType
    userData: userType
}
type category = 'general' | 'cartoon_characters' | 'animals' | 'realism' | 'historical_icons'
export default function ArtPeiceEditButton(props: props) {
    const [pendingRequest, setPendingRequest] = useState(false)
    const [validationErrors, setValidationErrors] = useState<string[]>([])
    const [emptyIndicesState, setEmptyIndicesState] = useState<number[]>([])
    function findEmptyStringIndices(variables: string[]): number[] {
        return variables
            .map((variable, index) => (variable === "" ? index : -1))
            .filter(index => index !== -1);
    }
    const [fieldType, setFieldType] = useState(props.FieldData.type || 'select_field_type');
    const handleFieldTypeChange = (event: SelectChangeEvent) => {
        setFieldType(event.target.value as category);
    };
    const placeholders = [
        "5v5",
        "club",
        "matches",
        "popular",
    ];
    const handleChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const firstInputValue = (form.elements[0] as HTMLInputElement).value;
        setChipData((chips) => [...chips, firstInputValue]);
        console.log(firstInputValue);
    };
    const [chipData, setChipData] = useState<string[]>(props.FieldData.tags);
    const handleChipDelete = (chipToDelete: string) => () => {
        console.log(chipToDelete);
        const data = chipData.filter((chip) => chip !== chipToDelete)
        setChipData(data);
    };
    const formRef = useRef(null);
    const BaseURL = import.meta.env.VITE_BASE_URL;

    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleConfirmAction = async () => {
        if (formRef.current) {

            var formData = new FormData(formRef.current);
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            formData.append("tags", JSON.stringify(chipData))
            Array.from(Images).forEach((image) => {
                formData.append('Images', image);  // Append each image under the 'Images' key
            });
            const formJson = Object.fromEntries((formData as any).entries());
            console.log(formJson);
            console.log(formData);
            const strings = [formJson.title]
            const emptyIndices = findEmptyStringIndices(strings);
            setEmptyIndicesState(findEmptyStringIndices(strings))
            let errorsArray = []
            console.log(emptyIndices); // Output: [1, 3]
            for (let i = 0; i < emptyIndices.length; i++) {
                switch (emptyIndices[i]) {
                    case 0:
                        errorsArray.push("Title is required")
                        break;
                    // case 4:
                    //     errorsArray.push("address is required")
                    //     break;
                    // case 5:
                    //     errorsArray.push("working hours is required")
                    //     break;
                    default:
                        break;
                }
                setValidationErrors(errorsArray)
                console.log(errorsArray);
            }
            errorsArray = []
            if (emptyIndices.length != 0) {
                return
            }

            setValidationErrors([])
            setEmptyIndicesState([])
        } else {
            toast.error("an error has occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        setPendingRequest(true)
        try {
            const response = await axios.put(BaseURL + "art/" + props.FieldData._id + "/" + props.userData._id, formData);
            queryClient.refetchQueries({ queryKey: ['FieldDetails' + props.FieldData._id, props.FieldData._id] });
            console.log(response);
            setPendingRequest(false)
        } catch (error) {
            console.log(error);
            toast.error("an error has occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setPendingRequest(false)
            handleCloseDialog();
            return
        }

        const arr = ['(headpats ( ´･･)ﾉ(._.`)'
            , 'Good job (❁´◡`❁)'
            , 'Proud of you o((>ω< ))o)'
            , 'eyyy (☞ﾟヮﾟ)☞☜(ﾟヮﾟ☜)'
            , 'Good girl (¬‿¬)'];
        const randomMessage = arr.at(Math.floor(Math.random() * arr.length));
        toast.success("Item Data Changed successfully! " + randomMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        handleCloseDialog();

    };
    const handleOpenDialog = () => {
        setIsDialogOpen(true)
    };
    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    };
    const [Images, setImages] = useState<File[]>([]);
    const handleFileChange = (files: File[]) => {
        setImages(files)
        console.log('Selected files:', files);
    };
    return (
        <>
            <CustomDialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                isDisabled={pendingRequest || !(["general", "cartoon_characters", "animals", "realism", "historical_icons"].includes(fieldType))}
                onConfirm={() => handleConfirmAction()}
                title="Edit Field info"
                confirmColor='primary'
                confirmText={pendingRequest ? "Loading" : "Confirm"}
                cancelText="cancel"
            >
                {validationErrors.map((item, index) => (
                    <Alert className='my-1' key={index} severity="error">{item}.</Alert>
                ))}
                <form className='mt-5' ref={formRef}>
                    <Grid container spacing={2} rowSpacing={1}>
                        <Grid size={6}><TextField defaultValue={props.FieldData.title} error={emptyIndicesState.includes(0)} required fullWidth id="title" name='title' label="Title" variant="outlined" /></Grid>
                        <Grid size={6}>
                            <Select
                                required
                                className="overflow-hidden"
                                labelId="type"
                                id="type"
                                variant='outlined'
                                fullWidth
                                name="type"
                                value={fieldType}
                                label="type"
                                onChange={handleFieldTypeChange}
                            >
                                <MenuItem value={'select_field_type'}>select field type (required*)</MenuItem>
                                <MenuItem value={'general'}>general</MenuItem>
                                <MenuItem value={'cartoon_characters'}>cartoon_characters</MenuItem>
                                <MenuItem value={'animals'}>animals</MenuItem>
                                <MenuItem value={'realism'}>realism</MenuItem>
                                <MenuItem value={'historical_icons'}>historical_icons</MenuItem>
                            </Select>
                        </Grid>
                        <Grid size={6}>
                        </Grid>

                        <Grid size={12}>
                            <TextField
                                id="note"
                                name="note"
                                label="notes"
                                defaultValue={props.FieldData.note}
                                placeholder={"example: Ball renting costs 25 EGP"}
                                rows={4}
                                className="w-full custom-textfield"
                                multiline
                                InputProps={{
                                    className: 'dark:text-slate-50 dark:placeholder:text-gray-400 ', // Text color and placeholder color
                                    style: { whiteSpace: "pre-line", scrollbarWidth: 'thin' }, // Allow newline in placeholder
                                }}
                                InputLabelProps={{
                                    className: 'dark:!text-white', // Change label color here
                                }}
                            />
                        </Grid>
                    </Grid>


                    <div className="mt-5">
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-medium">You are required to reupload Images for Field when Editing or Field Images are lost </span>
                        </div>
                        <FileUpload onChange={handleFileChange} />
                    </div>
                </form>
                <div className='bg-zinc-100 dark:bg-zinc-800 dark:bg-opacity-20 p-3 rounded'>
                    <div className='mb-2'>
                        <h6>Tags: </h6>
                        <ul className='min-h-8 w-full flex-wrap flex justify-center items-center list-none'>
                            {chipData.map(((chip, index) => (
                                <div key={index} className='m-1'><Chip size="small" onDelete={handleChipDelete(chip)} label={chip} /></div>
                            )))}
                        </ul>
                    </div>

                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </CustomDialog>
            <Tooltip title="Edit Art info" followCursor>
                <IconButton onClick={handleOpenDialog} aria-label="delete" color="info">
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </>
    )

}
