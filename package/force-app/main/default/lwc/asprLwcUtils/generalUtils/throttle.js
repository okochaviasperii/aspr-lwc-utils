export const throttle = (func, limit, context = this) => {
    let waiting = false;                      // Initially, we're not waiting
    let latest_call_this = null;
    let latest_call_args = null;
    const throttled_function = function () {                      
        if (waiting) {        
          // save latest call infos
          latest_call_this = this;
          latest_call_args = arguments;
        } else {
            func.apply(context, arguments);   
            waiting = true;                    
            setTimeout(function () {           
                waiting = false;
                // check for latest call infos
                if (latest_call_this !== null) {
                    throttled_function.apply(latest_call_this, latest_call_args);
                    latest_call_this = null;
                    latest_call_args = null;
                }
            }, limit);
        }
    }
    return throttled_function
}