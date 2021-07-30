import { SectionHeadlineProps } from './props'
import { SectionHeadlineWrapper } from './styled'

export const SectionHeadline: React.FC<SectionHeadlineProps> = ({ appearance = 'normal', label}) => {
    return (
        <SectionHeadlineWrapper appearance={appearance}>
            <h2>{label}</h2>
        </SectionHeadlineWrapper>
    )
}