'use client';

import Image from 'next/image';
import { Box, Container, Button } from '@mui/material';

const searchBoxStyles = {
  border: '2px solid #000000',
  borderRadius: '6px',
  padding: '16px',
  marginBottom: '32px',
  '& input': {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '15px',
    fontFamily: 'Roboto',
  },
};

const seeMoreButtonStyles = {
  border: '2px solid #000000',
  borderRadius: '6px',
  width: '100%',
  height: '52px',
  color: '#000000',
  fontFamily: 'Roboto',
  fontWeight: 900,
  fontSize: '13px',
  letterSpacing: '4%',
  textTransform: 'uppercase',
  marginTop: '32px',
  '&:hover': {
    border: '2px solid #000000',
    background: 'rgba(0, 0, 0, 0.04)',
  },
};

const statusBarStyles = {
  height: '44px',
  padding: '15px 21px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .time': {
    fontFamily: 'SF Pro Text',
    fontWeight: 600,
    fontSize: '15px',
    letterSpacing: '-2.22%',
  },
};

const tabBarStyles = {
  height: '83px',
  borderTop: '0.5px solid rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(27.18px)',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  background: '#FFFFFF',
};

export default function Home() {
  const images = Array.from({ length: 15 }, (_, i) => `/images/dog${i + 1}.jpg`);

  return (
    <Box sx={{ pb: '83px' }}>
      <Box sx={statusBarStyles}>
        <span className="time">9:27</span>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Image src="/images/cellular.svg" alt="Cellular" width={18} height={12} />
          <Image src="/images/wifi.svg" alt="WiFi" width={21} height={15} />
          <Image src="/images/battery.svg" alt="Battery" width={25} height={12} />
        </Box>
      </Box>

      <Container maxWidth="sm" sx={{ px: 2 }}>
        <Box sx={{ mt: 4, mb: 3 }}>
          <h1 className="search-title">Search</h1>
        </Box>

        <Box sx={searchBoxStyles}>
          <input type="text" placeholder="dogs" className="search-result" />
        </Box>

        <Box sx={{ mb: 2 }}>
          <span className="all-results">all results</span>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '11px',
          '& > div': {
            position: 'relative',
            width: '107px',
            height: '107px',
          }
        }}>
          {images.map((image, index) => (
            <Box key={index}>
              <Image src={image} alt={`Dog ${index + 1}`} fill style={{ objectFit: 'cover' }} />
            </Box>
          ))}
        </Box>

        <Button variant="outlined" sx={seeMoreButtonStyles}>
          see more
        </Button>
      </Container>

      <Box sx={tabBarStyles}>
        <Image src="/images/home.svg" alt="Home" width={40} height={40} />
        <Image src="/images/search.svg" alt="Search" width={40} height={40} />
        <Box
          sx={{
            width: 70,
            height: 40,
            background: 'linear-gradient(135deg, #FF00D6 0%, #FF4D00 100%)',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src="/images/plus.svg" alt="Add" width={13} height={13} />
        </Box>
        <Image src="/images/comment.svg" alt="Comment" width={40} height={40} />
        <Image src="/images/profile.svg" alt="Profile" width={40} height={40} />
      </Box>
    </Box>
  );
}
