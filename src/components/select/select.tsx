import { ISelectProps } from './types'

export const Select = <
  T extends React.SelectHTMLAttributes<HTMLSelectElement>['value'],
>({
  value,
  options,
  disabled,
  onChange,
  className,
  label,
  placeHolder,
  renderOption,
}: ISelectProps<T>) => {
  return (
    <div className="form-fields ">
      <label className="w-100">
        <span className="name">{label || 'Select'}</span>
        <span className="field">
          <span className="select">
            <select
              className={className}
              disabled={disabled}
              defaultValue={value || ''}
              onChange={_e =>
                onChange?.(options[_e.currentTarget.selectedIndex - 1])
              }
            >
              {placeHolder && (
                <option value="" disabled>
                  {placeHolder}
                </option>
              )}

              {options.map((option, index) => (
                <option
                  value={option.value}
                  onClick={() => console.log(option)}
                  key={index}
                >
                  {renderOption ? renderOption(option, index) : option.label}
                </option>
              ))}
            </select>
          </span>
        </span>
      </label>
    </div>
  )
}
