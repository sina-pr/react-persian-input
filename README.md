# react-persian-input

Full customizable outlined text input for right to left languages.

## Installation

Open a Terminal in your project's folder and run:

```sh
npm i react-persian-input
```

## Usage

```js
  ...
  import {useState} from "react"
  import FaInput from "react-persian-input"
  const App = () => {
    ...
    const [inputValue,setInputValue] = useState("")
    const handleInputChange = (e) => {
      setInputValue(e.target.value)
    }
    return(
        ...
        <FaInput label="نام" value={inputValue} onInputChange={handleInputChange}/>
    )
   }

```

#### Props

| Prop                 | Description                                                           | Type:DefaultValue |
| -------------------- | --------------------------------------------------------------------- | ----------------- |
| `label`              | label of input                                                        | string            |
| `width`              | width of input                                                        | string            |
| `rtl`                | input text direction                                                  | bool:false        |
| `value`              | value of text input                                                   | string            |
| `labelStyle`         | style of label when it's not on focus                                 | object            |
| `labelOnFocusStyle`  | style of label when it's on focus                                     | object            |
| `borderStyle`        | style of border when it's not on focus                                | object            |
| `borderOnFocusStyle` | style of border when it's on focus                                    | object            |
| `inputStyle`         | Style of input                                                        | object            |
| `moveLabelTop`       | move label to top when on focus (use negative number for move bottom) | string:25px       |
| `moveLabelRight`     | move label to right when on focus (use negative number for move left) | string:10px       |
| `scaleLabel`         | scale label when on focus                                             | string: .94       |
