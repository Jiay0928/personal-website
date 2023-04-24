import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import React from 'react'

type Props = {
  videoUrl: string, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, title:string
  
}
const VideoComponent = (props:Props) => {
  
    return (
      <React.Fragment>
        <Modal
          aria-labelledby={props.title}
          aria-describedby="video"
          open={props.open}
          onClose={() => props.setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 'fit-content',
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: 'calc(-1/4 * var(--IconButton-size))',
                right: 'calc(-1/4 * var(--IconButton-size))',
                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                borderRadius: '50%',
                bgcolor: 'background.body',
              }}
            />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              {props.title}
            </Typography>
            <video width="1000" height="700" controls>
               <source src={props.videoUrl} type="video/mp4"/>
             Your browser does not support the video tag.
            </video>
            
            
          </Sheet>
        </Modal>
      </React.Fragment>)
}

export default VideoComponent