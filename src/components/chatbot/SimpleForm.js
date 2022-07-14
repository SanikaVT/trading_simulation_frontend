
// import ChatBot from 'react-simple-chatbot';
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { color } from 'd3';

function SimpleForm(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 335,
    height: 530,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const buttonStyle = {
    position: "absolute",
    transform: "translate(450%, 30%)",
    width: 20,
    height: 25,
    border: "1px solid #000",
    color:"black"
  }
    return (
      <>
        <Modal
        open={props.openModal}
        onClose={() => {
          props.setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        {/* <Box sx={style}>
        <ChatBot
        steps={[
            {
             id:'intro', 
             message:'Hi! What can I help you with?', 
             trigger:'intro-user'
            },
            {
             id:'intro-user', 
             options:[
               {value:'ti', label:'Technical Issue', trigger:'tech-issue'},
               {value:'mps', label:'Most Popular Stock', trigger:'popular-stock'},
               {value:'book',label:'Book appointment with expert',trigger:'book-appointment'}
             ] 
            },
            {
             id:'tech-issue',
             message:'Please refresh the page and try again', 
             end:true
            },
            {
             id:'popular-stock', 
             message:'The most bought stock is AAPL', 
             end:true
            },
            {
             id:'book-appointment', 
             message:'Please click on the book appointments page to book an appointment with the expert', 
             end:true
               }
           ]}
            />
            <Button 
                variant="outlined"
                onClick={() => {
                  props.setOpenModal(false);
                }}
                sx={buttonStyle}
              >
                Close
              </Button>
            </Box> */}
         </Modal>
      </>
      
    );
  }
       

export default SimpleForm;