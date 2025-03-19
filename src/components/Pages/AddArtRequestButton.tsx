import { useRef, useState } from 'react';
import Grid from '@mui/material/Grid2';
import CustomDialog from '../ui/ModalWithChildren';
import axios from 'axios';
import { Alert, MenuItem, Select, SelectChangeEvent, TextField, Tooltip } from '@mui/material';
import FileUpload from '../ui/customFileUpload';
import { toast } from 'react-toastify';

export default function AddArtRequestButton() {
    const [pendingRequest, setPendingRequest] = useState(false)
    const [validationErrors, setValidationErrors] = useState<string[]>([])
    const [emptyIndicesState, setEmptyIndicesState] = useState<number[]>([])
    function findEmptyStringIndices(variables: string[]): number[] {
        return variables
            .map((variable, index) => (variable === "" ? index : -1))
            .filter(index => index !== -1);
    }
    const [ArtSize, setArtSize] = useState('select_art_size');
    const handleArtSizeChange = (event: SelectChangeEvent) => {
        setArtSize(event.target.value as string);
    };

    const formRef = useRef(null);
    const BaseURL = import.meta.env.VITE_BASE_URL;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleConfirmAction = async () => {
        if (formRef.current) {
            var formData = new FormData(formRef.current);
            Array.from(Images).forEach((image) => {
                formData.append('Images', image);  // Append each image under the 'Images' key
            });
            const formJson = Object.fromEntries((formData as any).entries());
            console.log(formJson);
            const strings = [formJson.title, formJson.ownedBy, formJson.location, formJson.price, formJson.address, formJson.hourCount]
            const emptyIndices = findEmptyStringIndices(strings);
            setEmptyIndicesState(findEmptyStringIndices(strings))
            let errorsArray = []
            console.log(emptyIndices); // Output: [1, 3]
            for (let i = 0; i < emptyIndices.length; i++) {
                switch (emptyIndices[i]) {
                    case 0:
                        errorsArray.push("Title is required")
                        break;
                    case 1:
                        errorsArray.push("Owner is required")
                        break;
                    case 2:
                        errorsArray.push("Location is required")
                        break;
                    case 3:
                        errorsArray.push("price is required")
                        break;
                    case 4:
                        errorsArray.push("address is required")
                        break;
                    case 5:
                        errorsArray.push("working hours is required")
                        break;
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
            if (formJson.hourCount < 0 || formJson.price < 0) {
                toast.error("working hours or price cannot be below zero!", {
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
            setValidationErrors([])
            setEmptyIndicesState([])
        } else {
            console.log("an error has occured");
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
            const response = await axios.post(BaseURL + "ArtRequest", formData);
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
            })
            setPendingRequest(false)
            return
        };
        toast.success("Art Request posted sucessfully!, Kindly expect an email shortly.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
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
                isDisabled={pendingRequest || ArtSize == "select_art_size"}
                isLoading={pendingRequest}
                onConfirm={() => handleConfirmAction()}
                title="Create a art peice request!"
                confirmColor='primary'
                confirmText="Confirm"
                cancelText="cancel"
            >
                {validationErrors.map((item, index) => (
                    <Alert className='my-1' key={index} severity="error">{item}.</Alert>
                ))}
                <form className='mt-5' ref={formRef}>
                    <p className='opacity-70'>I Need your email to contact you</p>
                    <Grid container spacing={2} rowSpacing={1}>
                        <Grid size={6}>
                            <TextField error={emptyIndicesState.includes(0)} type='email' required fullWidth id="email" name='email' label="Email" variant="outlined" /></Grid>
                        <Grid size={6}>
                            <Select
                                required
                                className="overflow-hidden"
                                labelId="type"
                                id="type"
                                variant='outlined'
                                fullWidth
                                name="type"
                                value={ArtSize}
                                label="type"
                                onChange={handleArtSizeChange}
                            >
                                <MenuItem value={'select_art_size'}>Select Size (required*)</MenuItem>
                                <MenuItem value={'50 × 70 cm'}>50 × 70 cm</MenuItem>
                                <MenuItem value={'70 x 100 cm'}>70 x 100 cm</MenuItem>
                            </Select>
                        </Grid>

                        <Grid size={12}>
                            <TextField
                                id="note"
                                name="note"
                                label="Describe your Vision"
                                placeholder={`example: Pastel Artwork \u000A50 × 70 cm \u000AI’d like a cartoon-style illustration featuring my original character alongside Garfield in a fun and playful scene.`}
                                rows={4}
                                className="w-full whitespace-pre custom-textfield"
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
                        <h2>Refrence Images (recomended for more details)</h2>
                        <FileUpload onChange={handleFileChange} />
                    </div>
                </form>

            </CustomDialog>
            <Tooltip title="Add Artwork" followCursor>
                <button onClick={handleOpenDialog} className="w-60 mt-10 bg-zinc-100 border border-1 border-black hover:border-zinc-100 hover:scale-110 border-solid hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-300 font-bold rounded-sm">Let's start a project!</button>
            </Tooltip>

        </>
    )
}
