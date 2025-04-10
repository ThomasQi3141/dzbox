import { Container, Box, Typography, Button } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center">
        <Typography variant="h3" gutterBottom>
          Upload, Download & Monetize Files, Decentralized 😎
        </Typography>

        <Typography variant="h6" gutterBottom>
          A Decentralized Alternative to File Uploads
        </Typography>

        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
