

export const careerTempate = (message: string) => {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Global Impact Assessment</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f3f3f320;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .container {
        max-width: 600px;
        width: 100%;
        margin: 30px auto;
      }

      .logo {
        margin-bottom: 1rem;
        padding-inline: 1rem;
      }

      .card {
        width: 100%;
        background-color: #fff;
        border: 1px solid #99999960;
        border-radius: 4px;
        padding: 20px;
        font-size: 16px;
      }

      .title {
        line-height: 2rem;
        font-weight: 600;
        text-align: center;
      }

      p {
        font-size: 14px;
        color: #444;
      }

      .name {
        color: black;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <p style="margin-top: 16px; margin-bottom: 16px; line-height: 26px; font-weight: 500; font-family: monospace;">
         ${message}
        </p>
      </div>
    </div>
  </body>
</html>

    `

}