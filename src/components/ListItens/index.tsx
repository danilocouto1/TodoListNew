import * as Componontens from './style'
import { item } from '../../types/item'

type Props = {
    itemProps: item
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ itemProps, onChange }: Props) => {
    return (
        <Componontens.Container done={itemProps.done}>
            <input
                type="checkbox"
                checked={itemProps.done}
                onChange={e => onChange(itemProps.id, e.target.checked)}
            />
            <label> {itemProps.name} </label>
        </Componontens.Container>
    )
}