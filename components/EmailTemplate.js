import * as React from 'react';

export const EmailTemplate = ({ name }) => (
     <div>
          <h1>Namaste, {name}!</h1>
          <p>
               Congratulations, Your Yoga Arambha Event Registration is
               confirmed.
          </p>
          <p>
               We are extremely excited to have you as a part of this event on
               International Day of Yoga
          </p>
          <p>
               Your Event Ticket is ready: Note: In the below box also you can
               mention one more column mentioning which category pass.{' '}
          </p>
          <p>
               Please show this ticket at the venue - registration desk to avail
               your pass.
          </p>
          <table style="width:100%">
               <tr>
                    <th>Ticket ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th> Date & Time</th>
               </tr>
               <tr>
                    <td>123</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
               </tr>
          </table>

          <p>From Athayog Living. </p>
     </div>
);
