import React from "react";
import "./style/Filter.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import styled from 'styled-components'

import { makeStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

function Filter() {
  const classes = useStyles();
  const [value, setValue] = React.useState("puan");
  const [valuee,setValuee]=React.useState("hepsi")

  const kitchenHandleChange =(event)=>{
    setValuee(event.target.value)
  }
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="filters">
      <div className="filterContainer">
        <div className="filterShort">
          <div className="filterName">
            <span>Sıralama</span>
          </div>
          <div className="shortType">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="short"
                name="short1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="puan"
                  control={<Radio />}
                  label="Puana Göre"
                />
                <FormControlLabel
                  value="tes"
                  control={<Radio />}
                  label="Teslimat Süresine Göre"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="filterMinCart">
          <div className="filterName">
            <span>Minimum Sepet Tutarı</span>
            <div className="rangebar">
              <div className="min">
                <label>5₺</label>
              </div>
              <div className="slider">
                <Slider
                  defaultValue={15}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={5}
                  min={5}
                  max={70}
                />
              </div>
              <div className="max">70₺</div>
            </div>
          </div>
          <div className="minCart"></div>
        </div>
        <div className="filterKitchenSelecy">
          <div className="filterName">
            <span>Mutfak</span>

            <SearchBar>
            <input type="text" placeholder="Mutfak Ara"/>
            
            </SearchBar>
            <div className="typeKitchen">
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="kitchen"
                  name="kitchen1"
                  value={valuee}
                  onChange={kitchenHandleChange}
                >
                <FormControlLabel
                    value="hepsi"
                    control={<Radio />}
                    label="Hepsi"
                  />
                  <FormControlLabel
                    value="hamburger"
                    control={<Radio />}
                    label="Hamburger"
                  />
                  <FormControlLabel
                    value="evYemekleri"
                    control={<Radio />}
                    label="Ev Yemekleri"
                  />

                  <FormControlLabel
                    value="kebeb"
                    control={<Radio />}
                    label="Kebab"
                  />

                  <FormControlLabel
                    value="pizza"
                    control={<Radio />}
                    label="Pizza"
                  />

                  <FormControlLabel
                    value="pide"
                    control={<Radio />}
                    label="Pide"
                  />

                  <FormControlLabel
                    value="tostSandviç"
                    control={<Radio />}
                    label="Tost & Sandviç"
                  />

                  <FormControlLabel
                    value="içecek"
                    control={<Radio />}
                    label="İçecek"
                  />

                  <FormControlLabel
                    value="salata"
                    control={<Radio />}
                    label="Salata"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchBar = styled.div `
 input{
    height:30px;
    width: 180px;
    font-style:center;
    font-size:15px;
    outline:none;
    border:none;
   background-color:lightgray;
   color:black;
   border-radius:5px;
   margin-top:10px;
 };
`
export default Filter;
