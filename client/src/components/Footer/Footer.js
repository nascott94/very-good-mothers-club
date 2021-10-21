import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Footer() {
  const styles = {
    jazz: {
      postion: "relative",
    },
    jazz2: {
      position: "absolute",
      bottom: 0,
      background: "#A4A3A1",
    },
  };
  return (
    <footer>
      <Box style={styles.jazz}>
        <Container style={styles.jazz2} maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" colort="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" colort="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" colort="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" colort="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" colort="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" colort="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" colort="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" colort="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" colort="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
