import { BarLoader } from "react-spinners";
import { useRecoilState } from "recoil";
import { showLoaderState } from "../../AtomStates/ProductStates";
import { Backdrop, CircularProgress } from "@mui/material";

const Handler = () => {
  const [showLoader, setShowLoader] = useRecoilState(showLoaderState);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={showLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Handler;
