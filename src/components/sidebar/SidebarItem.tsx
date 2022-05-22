import {Paper, styled} from '@mui/material'

const SidebarItem = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    margin: '10px 0',
}))

export default SidebarItem