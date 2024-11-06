{

    type Circle = {
        shape: 'circle';
        radius: number;
    }

    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    }


    type shape = Circle | Rectangle

    const calculateShapeArea = (shape: shape)=> {
        if (shape.shape === 'circle') {
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.shape === 'rectangle') {
            return shape.height * shape.width
        } else {
            console.log("No Shaped Matched");
        }
    }


    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea)


    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea)

}