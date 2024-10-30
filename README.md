<h1>Hostel Management System</h1>

<p>This project is a <strong>Hostel Management System</strong> built using <strong>Laravel</strong> for the backend and <strong>React</strong> for the frontend. It is designed to manage hostel-related activities, including room allocation, tenant records, rent payment tracking, and more. Data is stored in <strong>MySQL</strong>.</p>

<p>Visit the live site here: <a href="https://hostel-management-web-site.vercel.app/">Hostel Management System</a></p>

<h2>Features</h2>

<ul>
  <li><strong>Room Management</strong>: Add, update, and delete room details.</li>
  <li><strong>Tenant Records</strong>: Manage tenant information and assign rooms.</li>
  <li><strong>Rent Tracking</strong>: Monitor rent payment status.</li>
  <li><strong>User Authentication</strong>: Secure login for admin and tenants.</li>
  <li><strong>Interactive Dashboard</strong>: Displays room availability, tenant stats, and rent due.</li>
</ul>

<h2>Tech Stack</h2>

<ul>
  <li><strong>Backend</strong>: Laravel</li>
  <li><strong>Frontend</strong>: React.js</li>
  <li><strong>Database</strong>: MySQL</li>
</ul>

<h2>Installation</h2>

<h3>Prerequisites</h3>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://getcomposer.org/">Composer</a></li>
  <li><a href="https://www.mysql.com/">MySQL</a></li>
</ul>

<h3>Setup Instructions</h3>

<ol>
  <li><strong>Clone the repository</strong>
    <pre><code>git clone https://github.com/your-username/hostel-management-system.git
cd hostel-management-system</code></pre>
  </li>

  <li><strong>Backend Setup</strong>
    <ul>
      <li>Navigate to the Laravel backend directory:
        <pre><code>cd backend</code></pre>
      </li>
      <li>Install dependencies:
        <pre><code>composer install</code></pre>
      </li>
      <li>Configure environment variables in <code>.env</code> file:
        <pre><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password</code></pre>
      </li>
      <li>Run migrations:
        <pre><code>php artisan migrate</code></pre>
      </li>
      <li>Start the Laravel server:
        <pre><code>php artisan serve</code></pre>
      </li>
    </ul>
  </li>

  <li><strong>Frontend Setup</strong>
    <ul>
      <li>Navigate to the React frontend directory:
        <pre><code>cd ../frontend</code></pre>
      </li>
      <li>Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>Start the React development server:
        <pre><code>npm start</code></pre>
      </li>
    </ul>
  </li>

  <li><strong>Access the Application</strong>
    <ul>
      <li>Visit the frontend at <code>http://localhost:3000</code></li>
      <li>The backend API should be available at <code>http://localhost:8000</code></li>
    </ul>
  </li>
</ol>

<h2>Contributing</h2>

<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch for your feature: <code>git checkout -b feature-name</code>.</li>
  <li>Commit your changes: <code>git commit -m 'Add feature'</code>.</li>
  <li>Push to the branch: <code>git push origin feature-name</code>.</li>
  <li>Submit a pull request.</li>
</ol>

<h2>License</h2>

<p>This project is licensed under the MIT License.</p>
