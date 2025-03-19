import { useQueryClient } from '@tanstack/react-query';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import axios from 'axios';
import { IconButton, Tooltip } from '@mui/material';
import { toast } from 'react-toastify';
import { ArtPieceType, userType } from '../../types';

interface props {
    FieldData: ArtPieceType
    userData: userType
}
export default function MarkAsSoldButton(props: props) {

    const BaseURL = import.meta.env.VITE_BASE_URL;
    const queryClient = useQueryClient();
    const markAsSold = async () => {
        try {
            const response = await axios.put(BaseURL + "markAsSold/" + props.FieldData._id + '/' + props.userData._id);
            queryClient.refetchQueries({ queryKey: ['FieldDetails' + props.FieldData._id, props.FieldData._id] });
            console.log(response);
        } catch (error) {
            console.log(error);
            return toast.error("an error has occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
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
    }



    return (
        <>
            <Tooltip title="Mark Item as sold" followCursor>
                <IconButton onClick={markAsSold} aria-label="sold" color="success">
                    <LoyaltyIcon />
                </IconButton>
            </Tooltip>
        </>
    )

}
