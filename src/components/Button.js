import className from 'classnames';   //18 install and add classname library                               
                                    //14 adding prop-types for checking props 


function Button({
    children,             //9 //13 adding props children for buttons
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
 }) {
    
   const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {          //19 create a variable classes with default values
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
                
   });
   
   
   return <button {...rest} className={classes}>{children}</button>;     //17 adding a classname to style background
}

Button.propTypes = {         //15 adding a custom prop-types check
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {        //15 adding a custom prop-types check
        const count = 
        + Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger);

       if (count > 1) {
        return new Error('Only one of primary, secondary, success, warning, danger can be true');
       } 
    },
};

export default Button; //10