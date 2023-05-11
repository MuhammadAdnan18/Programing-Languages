//fo the samething we did for backdrope(create cancel handler and confirm handler for each button action)
function DeleteModle(props){

    function cancelHandler(){
       
        props.onCancel();
        

    }

    function confirmHandler(){

        props.onConfirm();

    }


    return( 
    <div className='modal'>
    <h3 className='question'>are you sure?</h3>
    <button className='btn btn--alt' onClick={cancelHandler}>cancel</button>
    <button className='btn' onClick={confirmHandler}>confirm</button>
    
    </div>
    );
    }
    
    export default DeleteModle;