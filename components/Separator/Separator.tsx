import { SeparatorProps } from './props'

export const Separator: React.FC<SeparatorProps> = ({ size }) => {
    return <div style={{height: size}} />
}