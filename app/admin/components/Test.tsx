import { Box, Button, Header, Input, Select, Text } from '@adminjs/design-system'
import { useRecords } from 'adminjs'
import { useState } from 'react'
import { components } from 'react-select'

const Test = () => {
  const hook = useRecords('guests')
  const [value, setValue] = useState([])
  console.log(hook)
  const handleClick = async () => {
    const response = await fetch('/mail', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        recipients: ['antoine.mady@gmail.com', 'test@test.com'],
        subject: 'Ceci est un sujet de mail',
        message: 'Ceci est le corps du message',
      }),
    })
    console.log(response)
  }
  const createGroup = (groupName: string, options: any[], setVal: any) => {
    return {
      label: (() => {
        return (
          <Box
            variant="white"
            style={{ cursor: 'pointer', padding: '1rem' }}
            onClick={() =>
              setVal((val: string[]) =>
                val.concat(options.filter((grpOpt: string) => !val.includes(grpOpt)))
              )
            }
          >
            {groupName}
          </Box>
        )
      })(),
      options: options,
    }
  }

  return (
    <Box variant="grey" id="storyook" data-css="design-system-examples">
      <Header>Storybook</Header>
      <Box variant="container">
        CurrentValue: {JSON.stringify(value)}
        <Select
          components={{
            Group: (props: any) => {
              const onClick = () =>
                props.selectProps.onChange(props.options.map((option: any) => option.data))
              return (
                <components.Group
                  {...props}
                  style={{ cursor: 'pointer' }}
                  headingProps={{ ...props.headingProps, onClick }}
                />
              )
            },
          }}
          closeMenuOnSelect={false}
          menuIsOpen={true}
          isMulti
          variant="filter"
          value={value}
          onChange={(selected) => setValue(selected)}
          options={[
            {
              label: 'Group 1',
              options: [
                { label: 'Group 1, option 1', value: 'value_1' },
                { label: 'Group 1, option 2', value: 'value_2' },
              ],
            },
            { label: 'A root option', value: 'value_3' },
            { label: 'Another root option', value: 'value_4' },
          ]}
        />
        <Text>For more examples visit our Storybook</Text>
      </Box>
    </Box>
  )
}

export default Test
