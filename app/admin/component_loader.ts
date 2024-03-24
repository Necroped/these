import { ComponentLoader } from 'adminjs'

const componentLoader = new ComponentLoader()

const Components = {
  Test: componentLoader.add('Test', './components/Test'),
  SendEmailButton: componentLoader.add('SendEmailButton', './components/SendEmailButton'),
}

export { componentLoader, Components }
