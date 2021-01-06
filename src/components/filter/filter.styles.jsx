import styled from 'styled-components'

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: stretch;
  max-width: 800px;
  width: 100%;

  & h2 {
    font-weight: normal;
    text-align: center;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & textarea {
    resize: none;
    border: none;
    border-radius: 4px;
    height: 200px;
    width: 100%;
    padding: 6px;
    font-family: inherit;
    background-color: #42454e;
    color: white;
  }

  & button {
    font-size: 1.2rem;
    align-self: end;
    border: none;
    padding: 6px 10px;
    margin-top: 2px;
    color: white;
    background-color: inherit;
    border-bottom: solid 1px white;
    transition: all 0.2s;

    &:active {
      transform: translateY(1px);
    }
  }
`

export const StyledFilteredText = styled.div`
  height: 200px;
  width: 100%;
  padding: 6px;
  margin-top: 12px;
  text-align: left;
  white-space: pre-wrap;
`

export const StyledFilterForm = styled.form`
  & div {
    display: flex;
    margin: 2px;
    align-items: center;
  }

  & label {
    flex: 0 0 120px;
    color: white;
    margin-right: 6px;
    text-align: left;
  }

  & input {
    flex: 1 1 600px;
    min-width: 0;
    background-color: #42454e;
    padding: 6px;
    color: white;
    border: none;
    border-radius: 4px;
  }

  & p {
    text-align: right;
    margin-top: 2px;
    color: #888;
  }
`
