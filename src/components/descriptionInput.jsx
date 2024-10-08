import {useState} from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
function DescriptionInput() {
  const [color, setColor] = useState(["#0F8A40","success"]);
  const [length,setLength]=useState(0);
  function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
      .toString()
      .split('')
      .map(x => farsiDigits[x])
      .join('');
  }
  return (
    <>
    <TextField
    fullWidth
    color={color[1]}
    onChange={(e) => {
        e.target.value.length >= 512 ? setColor(["#D02128","error"]) : setColor(["#0F8A40","success"]);
        setLength(e.target.value.length );
    }}
    placeholder="عنوان لیبل را وارد کنید"
    id="outlined-multiline-static"
    multiline
    rows={4}
    dir="rtl"
    sx={{
        borderRadius: "120px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "12px",
            borderWidth: "1px",
        },
    }}
    />
    <Typography sx={{color:color[0]}}>
        {toFarsiNumber(length)}/۵۱۲
    </Typography>
    </>
  );
  
}
export default DescriptionInput;
