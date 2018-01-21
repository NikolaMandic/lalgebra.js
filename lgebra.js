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
/** Elementwise divide
* @param {array} vec1
* @param {array} vec2
* @returns {array} vec1[i]/vec2[i]
*/
vecDiv=(a,b)=>_.zipWith(a,b,_.divide);
/** Multiply each element of a vec1 with a scalar s
* @param {array} vec1
* @param {number} s
* @returns {array} vec1[i]*s
*/
vecMuls=(a,b)=>_.map(a,(v)=>v*b)
/** Transpose a matrix
* @param {array} matrix like [[0,1,2],[3,4,5]]
* @returns {array} [[0,3],[1,4],[2,5]]
*/
tr = (a)=>_.spread(_.zip)(a)
/** Sigmoid function
* @param {number} t
* @returns {number} 1/(1+Math.pow(Math.E, -t))
*/
sigmoid=(t)=>1/(1+Math.pow(Math.E, -t));
/** Multiply vector with a matrix
* @param {array} matrix like [[a11,a12,a13],[a21,a22,a23]]
* @param {array} vector like [b1,b2,b3]
* @returns {array} [[a11*b1,a12*b2,a13*b3],[a21*b1,a22*b2,a23*b3]]
*/
vecMulMat=(a,b)=>_.map(tr(b),(v)=>vecMul(a,v));
/** Matrix multiplication
* @param {array} matrix like [[a11,a12],[a21,a22]]
* @param {array} matrix like [[b11,b12],[b21,b22]]
* @returns {array} matrix result
*/
matMulMat=(a,b)=>_.map(a,(v)=>vecMulMat(v,b))
/** Adds scalar from each element of a matrix
* @param {array} matrix like [[a11,a12],[a21,a22]]
* @param {number} scalar s
* @returns {array} matrix[i][j]-s
*/
matAdds=(a,b)=>_.map(a,(v)=>vecAdds(v,b))
/** Subtracts scalar from each element of a matrix
* @param {array} matrix like [[a11,a12],[a21,a22]]
* @param {number} scalar s
* @returns {array} matrix[i][j]-s
*/
matSubs=(a,b)=>_.map(a,(v)=>vecAdds(v,-b))
/** Multiplies each element of a matrix with a scalar
* @param {array} matrix like [[a11,a12],[a21,a22]]
* @param {number} scalar s
* @returns {array} matrix[i][j]-s
*/
matMuls=(a,b)=>_.map(a,(v)=>vecMuls(v,b))
/** Divides each element of a matrix with a scalar
* @param {array} matrix like [[a11,a12],[a21,a22]]
* @param {number} scalar s
* @returns {array} matrix[i][j]-s
*/
matDivs=(a,b)=>_.map(a,(v)=>vecDivs(v,b))
/** vector times vector transpose
* @param {array} vector like [a1,a2,a3]
* @param {array} vector like [b1,b2,b3]
* @returns {matrix} [[a1*b1,a2*b1,a3*b1],[a1*b2,a2*b2,a3*b2],[a1*b3,a2*b3,a3*b3]]
*/
vecMuleVecTr = (a,b)=>_.map(b,(v)=>vecMuls(a,v));
/** Add matrix to matrix elementwise. Matrices must be of same dimensions
* @param {array} matrix like [[a11,a12],[a21,a22]]
* @param {array} matrix like [[b11,b12],[b21,b22]]
* @returns {array} matrix result [[a11+b11,a12+b12],[a21+b21,a22+b22]]
*/
matAddMat=(a,b)=>_.zipWith(a,b,(a,b)=>vecAdd(a,b))
/** for each element of a vector take square root of an element
* @param {array}
* @returns {number} that number, plus one.
*/
vecSqrt=(a)=> _.map(a,Math.sqrt)
