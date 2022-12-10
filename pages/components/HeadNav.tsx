import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
function HeadNav() {
  return (
    <div className="bg-[#357733] flex justify-between items-center px-10 py-3">
      <span className=" text-white font-medium p-3 text-2xl">Đại lý bia</span>

      <div>
        <IconButton>
          <HomeIcon className="text-black" />
        </IconButton>
        <IconButton>
          <FeedIcon className="text-black" />
        </IconButton>
        <IconButton>
          <LiveHelpIcon className="text-black" />
        </IconButton>
      </div>
      <div>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Tìm kiếm sản phẩm
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SavedSearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <IconButton>
            <AccountCircleIcon className="text-black" />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon className="text-black" />
          </IconButton>
        </Box>
      </div>
    </div>
  );
}

export default HeadNav;
