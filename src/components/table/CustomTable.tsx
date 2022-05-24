import React, {useContext, useEffect} from 'react'
import {
    alpha,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow, Toolbar,
    Tooltip,
    Typography
} from '@mui/material'
import {CustomRow, GenericCell, ITableItem} from '../../exports'
import {Droppable} from 'react-beautiful-dnd'
import DeleteIcon from '@mui/icons-material/Delete'
import {StateContext} from '../../context/StateContext'

const headers = ['Select', 'Position', 'Type', 'Value']

const CustomTable: React.FC<{ onDelete: Function, onSelect: Function }> = ({onDelete, onSelect}) => {
    const {state: {tableItems, selected}} = useContext(StateContext)

    return (
        <TableContainer component={Paper}>
            <Toolbar
                sx={{
                    pl: {sm: 2},
                    pr: {xs: 1, sm: 1},
                    ...(selected.length > 0 && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                    }),
                }}
            >
                {selected.length > 0 ? (
                    <Typography
                        sx={{flex: '1 1 100%'}}
                        color='inherit'
                        variant='subtitle1'
                        component='div'
                    >
                        {selected.length} selected
                    </Typography>
                ) : (
                    <Typography variant='h6' id='tableTitle' color='text.secondary'>
                        Drag & Drop Table
                    </Typography>
                )}
                {selected.length > 0 && (
                    <Tooltip title='Delete'>
                        <IconButton onClick={() => onDelete()}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
            <Table sx={{minWidth: 650}} aria-label="generic table">
                <TableHead>
                    <TableRow>
                        {headers.map((col) =>
                            <GenericCell
                                key={col}
                                selected={selected}
                                setSelected={onSelect}
                                heading={col !== 'Value'}
                                data={col}
                            />
                        )}
                    </TableRow>
                </TableHead>
                <Droppable droppableId='tableItems'>
                    {(provided) => (
                        <TableBody
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tableItems.map((item: ITableItem, index: number) => (
                                item.show && <CustomRow
                                    key={item.id}
                                    index={index}
                                    id={item.id}
                                    internalState={item.selected}
                                    value={item.value}
                                    type={item.type}
                                    selected={selected}
                                    setSelected={onSelect}
                                />
                            ))}
                            {provided.placeholder}
                            {!tableItems.length && <div style={{minHeight: 75}}/>}
                        </TableBody>
                    )}
                </Droppable>
            </Table>
        </TableContainer>
    )
}

export default CustomTable