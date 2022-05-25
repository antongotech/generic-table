import React from 'react'
import {alpha, IconButton, Toolbar, Tooltip, Typography} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const TableToolbar: React.FC<{ selectedItems: number, onDelete: Function }> = ({selectedItems, onDelete}) => {
    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(selectedItems > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {selectedItems > 0 ? (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    color='inherit'
                    variant='subtitle1'
                    component='div'
                >
                    {selectedItems} selected
                </Typography>
            ) : (
                <Typography variant='h6' id='tableTitle' color='text.secondary'>
                    Drag & Drop Table
                </Typography>
            )}
            {selectedItems > 0 && (
                <Tooltip title='Delete'>
                    <IconButton onClick={() => onDelete()}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    )
}

export default TableToolbar