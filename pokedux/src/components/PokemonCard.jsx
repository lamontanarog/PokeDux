import { Card } from 'antd'
import { Meta } from 'antd/es/list/Item'
import {StarOutlined} from '@ant-design/icons'

function PokemonCard({name , url}) {
    return (
        <div>
        <Card
            title={name}
            cover={<img src={url} alt={name} />}
            extra={<StarOutlined/>}
            >
            <Meta description="fire, magic" />
        </Card>
            </div>
    )
}

export default PokemonCard