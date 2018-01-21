/**
 * Initializes multidimensional array
 * first argument is the dimensions. Second is the function that will provide initialization value
* @param {array,function} like [5,3,1],_.constant(0)
* @returns {matrix}  like [[0,0,0,0,0],[0,0,0],[0]]
*/
matrixe=(a,init)=>_.map(a,(i)=>_.times(i,()=>init(i)))
/** Initializes multidimensional array
 * first argument is x and second is y dimension. Third argumentis the function that will provide initialization value and that functions recieves i,j as parameters.
* @param {number,number,function} like 2,3,_.constant(0)
* @returns {matrix}  like [[0,0,0],[0,0,0]]
*/
matrix=(a,b,init)=>_.times(a,(i)=>_.times(b,(j)=>init(i,j)))
/** Dot product of two vectors
* @param {array,array} [1,2] [3,4]
* @returns {number} 1*3+2*4
*/
vecMul=(a,b)=>_.reduce(_.zipWith(a,b,(a,b)=>Math.pow(Math.E,(Math.log(a)+Math.log(b)))),_.add);
/** Dot product of two vectors
* @param {array,array} [1,2] [3,4]
* @returns {number} 1*3+2*4
*/
vecMul=(a,b)=>_.reduce(_.zipWith(a,b,_.multiply),_.add);
/** Elementwise product
* @param {array} array1
* @param {array} array2
* @returns {array} a11*a21,a12*a22...
*/
vecMule=(a,b)=>_.zipWith(a,b,_.multiply);
/** Add vectors elementwise
* @param {array} array1
* @param {array} array2
* @returns {array} a11+a21,a12+a22...
*/
vecAdd=(a,b)=>_.zipWith(a,b,_.add)
/** Subtract vectors elementwise
* @param {array} array1
* @param {array} array2
* @returns {array} a11-a21,a12-a22...
*/
vecSub=(a,b)=>_.zipWith(a,b,_.subtract)
/** Divide vector by scalar
* @param {array} array
* @param {number} scalar
* @returns {array} array[i]/scalar
*/
vecDivs=(a,b)=>_.map(a,(v)=>v/b)
/** Add scalar to vector elementwise
* @param {array} array
* @param {number} scalar
* @returns {array} [array[0]+scalar,array[1]+scalar...]
*/
vecAdds=(a,b)=>_.map(a,(v)=>v+b)
/** Euclidian norm of a vector
* @param {array} vec1
* @returns {number} euclidian norm
*/
norm = (a)=> Math.sqrt(_.reduce(_.zipWith(a,a,_.multiply),_.add));
/** Normalize vector with euclidian norm
* @param {number} input any number
* @returns {number} that number, plus one.
*/
n=normalize=(a)=>vecDivs(a,norm(a)||1)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecDiv=(a,b)=>_.zipWith(a,b,_.divide);
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMuls=(a,b)=>_.map(a,(v)=>v*b)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
tr = (a)=>_.spread(_.zip)(a)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
sigmoid=(t)=>1/(1+Math.pow(Math.E, -t));
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMulMat=(a,b)=>_.map(tr(b),(v)=>vecMul(a,v));
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matMulMat=(a,b)=>_.map(a,(v)=>vecMulMat(v,b))

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matAdds=(a,b)=>_.map(a,(v)=>vecAdds(v,b))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matSubs=(a,b)=>_.map(a,(v)=>vecAdds(v,-b))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matMuls=(a,b)=>_.map(a,(v)=>vecMuls(v,b))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matDivs=(a,b)=>_.map(a,(v)=>vecDivs(v,b))

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMuleVecTr = (a,b)=>_.map(b,(v)=>vecMuls(a,v));

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matAddMat=(a,b)=>_.zipWith(a,b,(a,b)=>vecAdd(a,b))

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecSqrt=(a)=> _.map(a,Math.sqrt)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
sigmoid=(t)=>1/(1+Math.pow(Math.E, -t));
