cd back

function updateenv() {
    rm -rf .env.example
    rm -rf .env.travis
    sed 's/=.*/=/' .env > .env.example
    cp .env .env.travis
}

for d in ./*/ ; do (cd "$d" && updateenv); done