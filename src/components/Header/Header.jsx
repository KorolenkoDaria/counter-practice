import {
    NavWrapper,
    NavContainer,
    NavContent,
    Button,
} from './Header.styled';


const Header = ({ showModal }) => {
    console.log({showModal})
    return (
        <NavWrapper>
            <NavContainer>
                <NavContent>Navbar</NavContent>
                <Button onClick={showModal}>Open modal</Button>
            </NavContainer>
        </NavWrapper>
    )
}
export default Header;
