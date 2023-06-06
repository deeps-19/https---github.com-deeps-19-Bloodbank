import React from 'react'
import Anav from './Anav'
import Aslide from './Aslide'

const Bloodhistory = () => {
  return (
    <div>
      <Anav/>
      <Aslide/>
      <div class="container">

<div class="row">
  <div class="col-sm-3">
    <div class="card bg-light">
      <div class="card-body">
          <div class="blood">
              <h2>A+ <i class="fas fa-tint"></i></h2>
          </div><br/><br/>
          <div>
              {/* {{A1.unit}} */}
          </div>                            
      </div>
    </div>
  </div>
  <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                  <h2>B+ <i class="fas fa-tint"></i></h2>
              </div><br/><br/>
              <div>
                {/* {{B1.unit}} */}
              </div>                            
          </div>
        </div>
  </div>
  <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                  <h2>O+ <i class="fas fa-tint"></i></h2>
              </div><br/><br/>
              <div>
                {/* {{O1.unit}} */}
              </div>                            
          </div>
        </div>
    </div>
    <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                  <h2>AB+ <i class="fas fa-tint"></i></h2>
              </div><br/><br/>
              <div>
                {/* {{AB1.unit}} */}
              </div>                            
          </div>
        </div>
    </div>
</div>

<div class="row">
  <div class="col-sm-3">
    <div class="card bg-light">
      <div class="card-body">
          <div class="blood">
              <h2>A- <i class="fas fa-tint"></i></h2>
          </div><br/><br/>
          <div>
            {/* {{A2.unit}} */}
          </div>                            
      </div>
    </div>
  </div>
  <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                  <h2>B- <i class="fas fa-tint"></i></h2>
              </div><br/><br/>
              <div>
                {/* {{B2.unit}} */}
              </div>                            
          </div>
        </div>
  </div>
  <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                  <h2>O- <i class="fas fa-tint"></i></h2>
              </div><br/><br/>
              <div>
                {/* {{O2.unit}} */}
              </div>                            
          </div>
        </div>
    </div>
    <div class="col-sm-3">
      <div class="card bg-light">
          <div class="card-body">
              <div class="blood">
                  <h2>AB- <i class="fas fa-tint"></i></h2>
              </div><br/><br/>
              <div>
                {/* {{AB2.unit}} */}
              </div>                            
          </div>
        </div>
    </div>
</div>
<hr/>
<br/>
<h3 class="text-center">Update Blood Unit</h3><br/>
<div class="xyz">

<form class="form-inline" method="POST">
    {/* {% csrf_token %} */}
    <div class="form-group mx-sm-3 mb-6">

        <select name="bloodgroup" class="form-control">
            <option disabled="disabled" selected="selected">Choose Blood Group</option>
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
        </select>
      </div>
    <div class="form-group mx-sm-3 mb-6">

      <input type="number" class="form-control" name="unit" placeholder="Unit"/>
    </div>
    <button type="submit" class="btn btn-primary mb-2">Update</button>
  </form>
</div>


</div>

    </div>
  )
}

export default Bloodhistory
