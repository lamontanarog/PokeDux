import { Card } from 'antd'
import { Meta } from 'antd/es/list/Item'
import {StarOutlined} from '@ant-design/icons'

function PokemonCard({name}) {
    return (
        <div>
        <Card
            title={name}
            cover={<img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png' alt={name} />}
            extra={<StarOutlined/>}
            >
            <Meta description="fire, magic" />
        </Card>
            </div>
    )
}

export default PokemonCard