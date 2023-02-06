import React, {memo} from 'react';

function FormInput({handleSearch}) {
    return (
        <form onSubmit={handleSearch} className="input-group mb-3">
            <input name='location' type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
            <div className="input-group-prepend">
            <button type="submit" className="btn btn-info">Search</button>
            </div>
        </form>
    )
}
export default memo (FormInput)