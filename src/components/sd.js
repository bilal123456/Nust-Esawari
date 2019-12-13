<div class="tab-pane fade" id="trains" role="tabpanel" aria-labelledby="trains-tab">
<form id="bookingTrain" method="post">
  <div class="row no-gutters search-input-2">
    <div class="col-lg form-group">
      <input type="text" class="form-control" id="trainFrom" required placeholder="From">
      <span class="icon-inside"><i class="fas fa-map-marker-alt"></i></span> </div>
    <div class="col-lg form-group">
      <input type="text" class="form-control" id="trainTo" required placeholder="To">
      <span class="icon-inside"><i class="fas fa-map-marker-alt"></i></span> </div>
    <div class="col-lg form-group">
      <input id="trainDepart" type="text" class="form-control" required placeholder="Depart Date">
      <span class="icon-inside"><i class="far fa-calendar-alt"></i></span> </div>
    <div class="col-lg travellers-class form-group">
      <input type="text" id="trainTravellersClass"  class="travellers-class-input form-control" name="train-travellers-class" placeholder="Travellers, Class" required onkeypress="return false;">
      <span class="icon-inside"><i class="fas fa-caret-down"></i></span>
      <div class="travellers-dropdown">
        <div class="row align-items-center">
          <div class="col-sm-7">
            <p class="mb-sm-0">Adults <small class="text-muted">(12+ yrs)</small></p>
          </div>
          <div class="col-sm-5">
            <div class="qty input-group">
              <div class="input-group-prepend">
                <button type="button" class="btn bg-light-4" data-value="decrease" data-target="#trainAdult-travellers" data-toggle="spinner">-</button>
              </div>
              <input type="text" data-ride="spinner" id="trainAdult-travellers" class="qty-spinner form-control" value="1" readonly>
              <div class="input-group-append">
                <button type="button" class="btn bg-light-4" data-value="increase" data-target="#trainAdult-travellers" data-toggle="spinner">+</button>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-2">
        <div class="row align-items-center">
          <div class="col-sm-7">
            <p class="mb-sm-0">Children <small class="text-muted">(2-12 yrs)</small></p>
          </div>
          <div class="col-sm-5">
            <div class="qty input-group">
              <div class="input-group-prepend">
                <button type="button" class="btn bg-light-4" data-value="decrease" data-target="#trainChildren-travellers" data-toggle="spinner">-</button>
              </div>
              <input type="text" data-ride="spinner" id="trainChildren-travellers" class="qty-spinner form-control" value="0" readonly>
              <div class="input-group-append">
                <button type="button" class="btn bg-light-4" data-value="increase" data-target="#trainChildren-travellers" data-toggle="spinner">+</button>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-2">
        <div class="row align-items-center">
          <div class="col-sm-7">
            <p class="mb-sm-0">Infants <small class="text-muted">(Below 2 yrs)</small></p>
          </div>
          <div class="col-sm-5">
            <div class="qty input-group">
              <div class="input-group-prepend">
                <button type="button" class="btn bg-light-4" data-value="decrease" data-target="#trainInfants-travellers" data-toggle="spinner">-</button>
              </div>
              <input type="text" data-ride="spinner" id="trainInfants-travellers" class="qty-spinner form-control" value="0" readonly>
              <div class="input-group-append">
                <button type="button" class="btn bg-light-4" data-value="increase" data-target="#trainInfants-travellers" data-toggle="spinner">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group mt-3">
          <select id="train-class" name="train-class" class="custom-select">
            <option value="0">All Class</option>
            <option value="1">First Class</option>
            <option value="2">Second Class</option>
            <option value="3">First Class Sleeper (SL)</option>
            <option value="4">Second Class Sleeper (SL)</option>
            <option value="5">Business</option>
          </select>
        </div>
        <button class="btn btn-primary btn-block submit-done" type="button">Done</button>
      </div>
    </div>
    <div class="col-lg-2 form-group">
      <button class="btn btn-primary btn-block" type="submit">Search</button>
    </div>
  </div>
</form>
</div>