import devClient from './dev.client'
import prodClient from './prod.client'

export default process.env.NODE_ENV != 'development' ? prodClient : devClient