namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HostelManagementSystem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_with_initials',
        'address',
        'index_number',
        'faculty',
        'academic_year',
        'birthday',
        'department',
        'phone_number',
        'nic_number',
        'image_path',
    ];
}
