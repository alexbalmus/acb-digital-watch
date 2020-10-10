let hours = 0;
let ampm = false;
let minutes = 0;
let adjust = 0;
let time = "";

function btnAHandler() 
{
    if (hours < 23) 
    {
        hours++;
    } 
    else 
    {
        hours = 0;
    }
}

input.onButtonPressed(Button.A, btnAHandler);

function btnABHandler() 
{
    ampm = !(ampm);
}

input.onButtonPressed(Button.AB, btnABHandler);

function btnBHandler() 
{
    if (minutes < 59) 
    {
        minutes++;
    } 
    else 
    {
        minutes = 0;
    }
}

input.onButtonPressed(Button.B, btnBHandler);

function shakeHandler() 
{
    let hours2 = 0;
    adjust = hours2;

    if (ampm) 
    {
        if (hours > 12) 
        {
            adjust = hours - 12;
        } 
        else 
        {
            if (hours == 0) 
            {
                adjust = 12;
            }
        }
    }

    time = "" + adjust;
    time = "" + time + ":";
    time = "" + time + minutes / 10;
    time = "" + time + minutes % 10;

    if (ampm) 
    {
        if (hours > 11) 
        {
            time = "" + time + "PM";
        } 
        else 
        {
            time = "" + time + "AM";
        }
    }

    basic.showString(time);
}

input.onGesture(Gesture.Shake, shakeHandler);

function main() 
{
    basic.pause(60000);

    if (minutes < 59) 
    {
        minutes++;
    } 
    else 
    {
        minutes = 0;
        
        if (hours < 23) 
        {
            hours++;
        } else 
        {
            hours = 0;
        }
    }
}

basic.forever(main);
