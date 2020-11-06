const clearAvFromBoard = board => {
    return board.map(r => r.map(sq => {
        if (sq && (sq.substring(2,4) === "cp")) return sq.substring(0,2)
        if (sq === "av") return null
        return sq
    }))
}

export default clearAvFromBoard


