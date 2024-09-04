import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Stack from '@mui/material/Stack';
export default function DescriptionTitle(){
    return(
        <Grid container
        direction="column"
        display="flex" 
        alignItems="flex-start"
        dir="rtl">
            <Grid  alignItems="center" item container direction="row" paddingTop={"12px"} paddingBottom={"8px"}>
                <Stack justifyContent="center" alignItems="center">
                    <BorderColorOutlinedIcon sx={{color:"customGray.lightText",paddingLeft:"5px",fontSize:"20px"}}/>
                </Stack> 
                <Typography fontSize={"12px"} color={"customGray.lightText"}>
                    توضیحات
                </Typography>
            </Grid>
            <Grid container sx={{overflow:"auto",height:"240px",borderStyle:"solid",borderColor:"customGray.main",borderWidth:"1px",borderRadius:"8px",padding:"8px"}}>
                <Typography fontSize={"14px"} color={"customGray.darkText"} sx={{textAlign:'right'}}>
                    {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. */}
                    بسم الله الرحسنمتیمنسبیتمسنشنیستکنبسیتتمکنسیبتلمنککبلیمتنبیستلیبکلت یبمنلکتیسکنمبلکمنیبلمنبیست میسبکنلتبیمنکتلمنیبکتلمنکیبس.نسشمبنسیتنیبسهعایبستیتنبتاتانمیسباتمنیبابیستانیبستایبتنامیسبمتابنسیتایتاتابیساتنمبیستاتانمیبستانمبیتانیسبتانمیساتنملتمنسیبتلسمیبنتلسیبمنکلت میبنتلیمسنبتلمیبنتلمبنیتلمنبیت
                </Typography>
            </Grid>
        </Grid>
    )
}