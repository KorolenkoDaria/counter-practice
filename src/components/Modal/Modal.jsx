import { Backdrop, Wrapper, Dialog, Content, Header, Title, Button, Body } from "./Modal.styled";

const Modal = ({children, closeModal}) => { 
    return (
        <Backdrop>
		    <Wrapper>
			    <Dialog>
				    <Content>
					    <Header>
						<Title> Modal</Title>
						    <Button 
							onClick={closeModal} >Close</Button>
					    </Header>
					<Body>{children}</Body>
				    </Content>
			    </Dialog>
                </Wrapper>
            </Backdrop>
	)
}

export default Modal;