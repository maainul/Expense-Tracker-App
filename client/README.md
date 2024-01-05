## Component Design 

1. Form Input Field Design :

2. Button Design

3. Submit Button Design

4. Title Design

5. Card Design

6. Brand and Logo Design

7. Primary Header Design

8. Secondary Header Design

9.  



### Button Primary :
![image](https://github.com/maainul/Expense-Tracker-App/assets/37740006/b976d542-445f-4143-a1f8-4aa0e47db15f)

```js
import React from 'react'

const ButtonPrimary = ({ clsName, title }) => {
    return (
        <button className='btn btn-primary'>

            <i className={clsName}></i>
            <span>{title}</span>
        </button>
    )
}

export default ButtonPrimary

```
```css

.btn {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.4375rem 1.25rem;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.53;
    transition: all 0.2s ease-in-out;
    border: none;
    border-radius: 8px;
}

.btn:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
}

.btn-primary {
    color: #fff;
    background-color: #696cff;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4);
}

.btn-primary:hover {
    color: #fff !important;
    background-color: #5f61e6 !important;
    transform: translateY(-1px) !important;
}
```
