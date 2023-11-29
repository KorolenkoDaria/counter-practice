
import {Item, Wrapper, InputWrapp, Checkbox, BtnWrapp, Button} from "./ToDo.styled"
const ToDo = ({todo, handleCheckCompleted, handleDelete}) => {
	return (
        <Item>
            <Wrapper>
                <InputWrapp>

					<Checkbox type="checkbox" checked={todo.completed} onChange={() => handleCheckCompleted(todo.id)}/>
					
                    {todo.title}
                </InputWrapp>
                <BtnWrapp>
                    <Button
                        type='button'
                        className='btn-close'
						aria-label='Close'
						onClick={()=>handleDelete(todo.id)}
                    > Delete</Button>
                </BtnWrapp>
            </Wrapper>
        </Item>
    );
};

export default ToDo;