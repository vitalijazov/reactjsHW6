import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../reducers/goodsSlice';
import { useEffect, useState } from 'react';

function NewGoodsItemForm() {
    const state = useSelector(state => state.goods);
    const dispatch = useDispatch();

    const [name, setName] = useState(state.current.name);
    const [description, setDescription] = useState(state.current.description);
    const [price, setPrice] = useState(state.current.price);
    const [available, setAvailable] = useState(state.current.available);

    useEffect(()=>{
        setName(state.current.name);
        setDescription(state.current.description);
        setPrice(state.current.price);
        setAvailable(state.current.available);
    },[state.current]);

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const onPriceChange = (e) => {
        setPrice(e.target.value);
    };

    const onAvailableChange = (e) => {
        setAvailable(e.target.value);
    };

    const onAddButtonClick = () => {
        if (name !== "" && description !== "" && price !== "") {
            dispatch(add({
                id: state.current.id === "" ? Date.now() : state.current.id,
                name: name,
                description: description,
                price: price,
                available: available
            }));
            setName("");
            setDescription("");
            setPrice("");
            setAvailable(false);  
        }

    };


    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                margin: 2,
            }}
        >
            <div>
                <TextField
                    required
                    label="Имя"
                    value={name}
                    onChange={onNameChange}
                />
                <TextField
                    required
                    label="Описание"
                    value={description}
                    onChange={onDescriptionChange}
                />
                <TextField
                    required
                    type="number"
                    label="Цена"
                    value={price}
                    onChange={onPriceChange}
                />
                <FormControlLabel style={{ margin: "6px" }}
                    control={
                        <Checkbox
                            onChange={onAvailableChange}
                            checked={available}
                        />
                    }
                    label="Доступность"
                />
                <Button
                    variant="contained"
                    onClick={onAddButtonClick}
                >
                    Добавить
                </Button>

            </div>
        </Box>
    );
}

export default NewGoodsItemForm;