export const ratingColor = (rating) => {
    let color;
    if (rating >= 9) color = 'rgb(0, 180, 0)';
    else if (rating >= 8.5) color = 'rgb(0, 200, 0)';
    else if (rating >= 8.3) color = 'rgb(0, 230, 0)';
    else if (rating >= 8) color = 'rgb(90, 230, 0)';
    else if (rating >= 7.8) color = 'rgb(130, 250, 0)';
    else if (rating >= 7.5) color = 'rgb(180, 250, 0)';
    else if (rating >= 7.3) color = 'rgb(200, 250, 0)';
    else if (rating >= 7) color = 'rgb(220, 250, 0)';
    else if (rating >= 6.5) color = 'rgb(255, 230, 0)';
    else if (rating >= 6) color = 'rgb(255, 200, 0)';
    else if (rating >= 5.5) color = 'rgb(255, 180, 0)';
    else if (rating >= 5) color = 'rgb(255, 150, 0)';
    else if (rating < 5) color = 'rgb(255, 110, 0)';
    else color = 'unset';
    const backg = {
        backgroundColor: color,
        color: 'black',
    };
    return backg
}

