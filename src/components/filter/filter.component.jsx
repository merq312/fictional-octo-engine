import { useState } from 'react'
import filterFunc from '../../script'
import {
  StyledFilter,
  StyledForm,
  StyledFilteredText,
  StyledFilterForm,
} from './filter.styles'

const Filter = () => {
  const [userInput, setUserInput] = useState('')
  const [filteredOutput, setFilteredOutput] = useState('')
  const [filters, setFilters] = useState({
    hardFilter: ['foo', 'baz', '2020'],
    softFilter: ['ur'],
  })

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleInputSubmit = (event) => {
    event.preventDefault()
    // console.log(userInput)
    setFilteredOutput(
      filterFunc(userInput, filters.hardFilter, filters.softFilter)
    )
  }

  const handleFilterChange = (event) => {
    // console.log(event)
    setFilters({
      ...filters,
      [event.target.name]: event.target.value.split(', '),
    })
  }

  return (
    <StyledFilter>
      <h2>Edit Filters</h2>
      <StyledFilterForm>
        <div>
          <label>Hard Filter</label>
          <input
            type="text"
            name="hardFilter"
            onChange={handleFilterChange}
            defaultValue="foo, baz, 2020"
          />
        </div>
        <p>Filters all occurences : foobar &mdash;&gt; ***bar</p>
        <div>
          <label>Soft Filter</label>
          <input
            type="text"
            name="softFilter"
            onChange={handleFilterChange}
            defaultValue="ur"
          />
        </div>
        <p>Only filters exact matches : your ur &mdash;&gt; your ** </p>
      </StyledFilterForm>
      <h2>Type Something</h2>
      <StyledForm onSubmit={handleInputSubmit}>
        <textarea type="text" name="user-input" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </StyledForm>
      <h2>Filtered Output</h2>
      <StyledFilteredText>{filteredOutput}</StyledFilteredText>
    </StyledFilter>
  )
}

export default Filter
