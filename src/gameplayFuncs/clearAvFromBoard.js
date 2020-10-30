const clearAvFromBoard = board => {
    return board.map(r => r.map(sq => sq === "av" ? null : sq))
}

export default clearAvFromBoard