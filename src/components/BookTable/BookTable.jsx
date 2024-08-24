import React from 'react'
import BookTableHero from './BookTableComponents/BookTableHero'
import TableSelection from './BookTableComponents/TableSelection'

const BookTable = () => {
  return (
    <div className='book-table'>
      <BookTableHero />
      <TableSelection />
    </div>
  )
}

export default BookTable
