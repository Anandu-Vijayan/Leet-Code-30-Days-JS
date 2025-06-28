// 391. Perfect Rectangle
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given an array rectangles where rectangles[i] = [xi, yi, ai, bi] represents an axis-aligned rectangle. The bottom-left point of the rectangle is (xi, yi) and the top-right point of it is (ai, bi).

// Return true if all the rectangles together form an exact cover of a rectangular region.

 

// Example 1:


// Input: rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
// Output: true
// Explanation: All 5 rectangles together form an exact cover of a rectangular region.
// Example 2:


// Input: rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
// Output: false
// Explanation: Because there is a gap between the two rectangular regions.
// Example 3:


// Input: rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
// Output: false
// Explanation: Because two of the rectangles overlap with each other.
 

// Constraints:

// 1 <= rectangles.length <= 2 * 104
// rectangles[i].length == 4
// -105 <= xi < ai <= 105
// -105 <= yi < bi <= 105


const isRectangleCover = rects => {
    const corners = new Set()
    let left = Infinity
    let right = 0
    let top = 0
    let bot = Infinity
    let area = 0
    const keyit = ( x, y ) => x + ( y === 0 ? 0 : .1 / y )
    const track = ( x, y ) => {
        const n = keyit( x, y )

        if ( corners.has( n ) ) {
            corners.delete( n )
        } else {
            corners.add( n )
        }
    }
    
    for ( let i = 0; i < rects.length; i++ ) {
        const [ x1, y1, x2, y2 ] = rects[ i ]
        
        left = Math.min( left, x1 )
        top = Math.max( top, y2 )
        right = Math.max( right, x2 )
        bot = Math.min( bot, y1 )
        
        area += ( x2 - x1 ) * ( y2 - y1 )

        track( x1, y1 )
        track( x1, y2 )
        track( x2, y1 )
        track( x2, y2 )
    }

    return (
        area === ( top - bot ) * ( right - left )
        && 4 === corners.size
        && corners.has( keyit( left, bot ) )
        && corners.has( keyit( right, bot ) )
        && corners.has( keyit( left, top ) )
        && corners.has( keyit( right, top ) )
    )
}