let games = [
    { id: '1', title: 'Halo', platform: ['Xbox', 'PC'] },
    { id: '2', title: 'Gears of War', platform: ['Xbox', 'PC'] },
    { id: '3', title: 'God of War', platform: ['Playstation'] },
    { id: '4', title: 'Mario Kart', platform: ['Nintendo'] },
    { id: '5', title: 'Super Smash Bros', platform: ['Nintendo'] }
]

let authors = [
    { id: '1', name: 'John Doe', verified: true },
    { id: '2', name: 'Jane Doe', verified: false },
    { id: '3', name: 'Bob Smith', verified: true }
]

let reviews = [
    { id: '1', rating: 5, content: 'This game is great!', author_id: '1' },
    { id: '2', rating: 3, content: 'This game is ok.', author_id: '2' },
    { id: '3', rating: 1, content: 'This game is terrible!', author_id: '3' }
]


export default { games, authors, reviews }